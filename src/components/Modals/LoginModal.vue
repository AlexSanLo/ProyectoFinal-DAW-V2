<template>
  <div
    v-if="props.isModalOpen" 
    class="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
    @keydown.esc="closeModal"
    tabindex="0"
    ref="modalContainer"
    @mousedown.self="closeModal"
  >
    <div
      class="bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] p-6 rounded-lg shadow-lg w-96 relative border border-[var(--color-black)] dark:border-[var(--color-grey)]"
    >
      <button @click="closeModal" class="absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]">
        &times;
      </button>
  
      <h2 class="text-xl font-semibold text-center mb-4 text-[var(--color-black)] dark:text-[var(--color-white)]">
        Login / Register
      </h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]">Email:</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-[var(--color-black)] dark:text-[var(--color-white)]">Password:</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="w-full mt-1 p-2 border border-[var(--color-black)] dark:border-[var(--color-white)] rounded-md bg-[var(--color-grey)] dark:bg-[var(--color-white)] text-[var(--color-black)] dark:text-[var(--color-black)]"
            required
          />
        </div>
        <!-- Checkbox para mantener la sesión iniciada -->
        <div class="mb-4 flex items-center">
          <input
            id="keepLogged"
            type="checkbox"
            v-model="keepLogged"
            class="mr-2 w-6 h-6"
          />
          <label for="keepLogged" class="text-md text-[var(--color-black)] dark:text-[var(--color-white)]">
            No cerrar sesión
          </label>
        </div>
        <!-- Checkbox para activar notificaciones -->
        <div class="mb-4 flex items-center">
          <input
            id="activarNotificaciones"
            type="checkbox"
            v-model="activarNotificaciones"
            class="mr-2 w-6 h-6"
          />
          <label for="activarNotificaciones" class="text-md text-[var(--color-black)] dark:text-[var(--color-white)]">
            Activar Notificaciones
          </label>
        </div>
        <div class="flex justify-between">
          <button type="button" @click="handleSignUp" class="px-4 py-2 bg-green-500 text-[var(--color-white)] rounded-md shadow-md">
            Register
          </button>
          <button type="submit" class="px-4 py-2 bg-[var(--color-blue-strong)] text-[var(--color-white)] rounded-md shadow-md">
            Login
          </button>
        </div>
      </form>
      <div class="text-center mt-4">
        <a
          href="#"
          @click.prevent="handleResetPassword"
          class="text-sm text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  fetchSignInMethodsForEmail, 
  sendPasswordResetEmail, 
  setPersistence, 
  browserLocalPersistence, 
  browserSessionPersistence 
} from "firebase/auth";
import useNotes from "../../composables/useNotes";

const props = defineProps({
  isModalOpen: Boolean,
});
const emit = defineEmits(["close"]);

const email = ref("");
const password = ref("");
const keepLogged = ref(false);
const activarNotificaciones = ref(false); // Variable para el checkbox de notificaciones
const modalContainer = ref(null);
const { login, loadNotes } = useNotes();

async function handleLogin() {
  if (!navigator.onLine) {
    alert("No tienes conexión a internet. Conéctate para iniciar sesión.");
    return;
  }
  try {
    const auth = getAuth();
    await setPersistence(
      auth,
      keepLogged.value ? browserLocalPersistence : browserSessionPersistence
    );
    await login(email.value, password.value);
    await loadNotes();
    
    // Si el usuario marcó la opción, se guarda la intención de solicitar permiso
    if (activarNotificaciones.value) {
      localStorage.setItem("requestNotifications", "true");
    }
    
    emit("close");
  } catch (error) {
    if (
      error.code === "auth/invalid-credential" ||
      (error.message && error.message.includes("invalid-credential"))
    ) {
      alert("El usuario o la contraseña no son correctos. Si no tienes cuenta, regístrate primero.");
    } else if (
      error.code === "auth/user-not-found" ||
      (error.message && error.message.includes("user-not-found"))
    ) {
      alert("Debes registrarte antes de iniciar sesión.");
    } else {
      alert("Error: " + (error.message || error));
    }
  }
}

async function handleSignUp() {
  if (!navigator.onLine) {
    alert("No tienes conexión a internet. Conéctate para registrarte.");
    return;
  }
  const auth = getAuth();
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email.value);
    if (methods.length > 0) {
      alert("Este email ya está registrado. Por favor, inicia sesión.");
      return;
    }
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    closeModal();
  } catch (error) {
    alert("Error de registro: " + error.message);
  }
}

function closeModal() {
  emit("close");
}

function handleResetPassword() {
  if (!email.value) {
    alert("Por favor, introduce tu email para poder enviar el correo de recuperación.");
    return;
  }
  if (!navigator.onLine) {
    alert("No tienes conexión a internet. Conéctate para recuperar la contraseña.");
    return;
  }
  const auth = getAuth();
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      alert("Se ha enviado un correo para restablecer tu contraseña.");
    })
    .catch((error) => {
      alert("Error al enviar el correo: " + error.message);
    });
}

watch(() => props.isModalOpen, (newVal) => {
  if (newVal) {
    document.addEventListener("keydown", handleEscape);
    modalContainer.value?.focus();
  } else {
    document.removeEventListener("keydown", handleEscape);
  }
});

function handleEscape(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}
</script>
