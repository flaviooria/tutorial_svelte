import { writable } from "svelte/store";

// Vamos a hacer nuestra función para almacener dato en el store

export const count = writable(0); 

// writable tiene métodos para actualizar, añadir y suscribir el estado.