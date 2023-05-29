<template>
  <div>
    <input type="text" v-model="apiUrl" placeholder="Ingrese la URL del API">
    <textarea v-model="postData" placeholder="Ingrese los datos a enviar"></textarea>
    <button @click="getData">Obtener datos</button>
    <button @click="createData">Crear dato</button>
    <button @click="updateData">Actualizar dato</button>
    <button @click="deleteData">Eliminar dato</button>

    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiUrl: '', // Variable para almacenar la URL del API ingresada por el usuario
      postData: '', // Variable para almacenar los datos a enviar en las solicitudes POST y PUT
      message: '', // Variable para mostrar los mensajes de respuesta
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(this.apiUrl); // Utiliza la URL ingresada por el usuario

        // Mostrar mensaje de éxito
        this.message = `Datos obtenidos: ${JSON.stringify(response.data)}`;
      } catch (error) {
        // Validar error de conexión
        if (error.code === 'ECONNABORTED') {
          this.message = 'Error: Tiempo de espera agotado. Verifica la conexión.';
        } else {
          this.message = `Error al obtener los datos: ${error.message}`;
        }
      }
    },

    async createData() {
      try {
        const data = JSON.parse(this.postData); // Parsea la cadena de texto a un objeto JSON
        const response = await axios.post(this.apiUrl, data); // Utiliza la URL y los datos ingresados por el usuario

        // Mostrar mensaje de éxito
        this.message = `Dato creado: ${JSON.stringify(response.data)}`;
      } catch (error) {
        // Validar error de conexión
        if (error.code === 'ECONNABORTED') {
          this.message = 'Error: Tiempo de espera agotado. Verifica la conexión.';
        } else {
          this.message = `Error al crear el dato: ${error.message}`;
        }
      }
    },

    async updateData() {
      try {
        const data = JSON.parse(this.postData); // Parsea la cadena de texto a un objeto JSON
        const response = await axios.put(this.apiUrl, data); // Utiliza la URL y los datos ingresados por el usuario

        // Mostrar mensaje de éxito
        this.message = `Dato actualizado: ${JSON.stringify(response.data)}`;
      } catch (error) {
        // Validar error de conexión
        if (error.code === 'ECONNABORTED') {
          this.message = 'Error: Tiempo de espera agotado. Verifica la conexión.';
        } else {
          this.message = `Error al actualizar el dato: ${error.message}`;
        }
      }
    },

    async deleteData() {
      try {
        const response = await axios.delete(this.apiUrl); // Utiliza la URL ingresada por el usuario

        // Mostrar mensaje de éxito
        this.message = `Dato eliminado: ${JSON.stringify(response.data)}`;
      } catch (error) {
        // Validar error de conexión
        if (error.code === 'ECONNABORTED') {
          this.message = 'Error: Tiempo de espera agotado. Verifica la conexión.';
        } else {
          this.message = `Error al eliminar el dato: ${error.message}`;
        }
      }
    },
  },
};
</script>

<style>
.message {
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 5px;
  border: 1px solid #ccc;
}
</style>