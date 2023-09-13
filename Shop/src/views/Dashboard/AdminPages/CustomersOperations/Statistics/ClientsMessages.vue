<template>
  <section>
    <div class="p-3">
      <div>
        <h1 class="text-light p-4">List of Clients Messages</h1>
      </div>
      <div class="search d-flex align-items-center justify-content-start m-5">
        <i class="fa-solid fa-magnifying-glass text-light me-3"></i>
        <input
          type="text "
          class="p-2 border border-light rounded-2 bg-transparent"
          placeholder="Search"
        />
      </div>
      <table class="creative-table shadow-lg">
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Message</th>
          <th>Delete Account</th>
        </tr>
        <tr v-for="user in usersWithMessages">
          <td>
            {{ user.email }}
          </td>

          <td>
            <div v-for="message in user.messages" :key="message._id">
              {{ message.Name }}
            </div>
          </td>
          <td>
            <div v-for="message in user.messages" :key="message._id">
              {{ message.Descrbtion }}
            </div>
          </td>
          <td>
            <div v-for="message in user.messages" :key="message._id">
              <button class="btn btn1" @click="deleteMessage(message._id)">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      describe: "",
    };
  },
  computed: {
    usersWithMessages() {
      return this.$store.getters["admins/getUsers"].filter(
        (user) => user.messages && user.messages.length > 0
      );
    },
  },
  mounted() {
    this.$store.dispatch("admins/fetchUsersArray");
  },
  methods: {
    async deleteMessage(id) {
      try {
        const userWithMessage = this.usersWithMessages.find((user) =>
          user.messages.some((message) => message._id === id)
        );
        if (userWithMessage) {
          const messageIndex = userWithMessage.messages.findIndex(
            (message) => message._id === id
          );
          if (messageIndex !== -1) {
            userWithMessage.messages.splice(messageIndex, 1);
          }
        }
      } catch (error) {
        console.error("Error deleting ", error);
      }
    },
  },
};
</script>
<style scoped lang="scss">
h1::after {
  content: "";
  display: block;
  height: 3px;
  width: 7%;
  margin: 10px;
  background-color: #5d88ffa9;
}
.creative-table {
  width: 90%;
  border-collapse: collapse;
  margin: 20px 0;

  th {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background-color: #5d88ffa9;
    color: white;
  }
  td {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    color: white;
  }
  .status-badge {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
  }

  .success {
    background-color: #4caf50;
    color: white;
  }
}

.warning {
  background-color: #ffc107;
  color: white;
}
.btn1 {
  background-color: rgba(255, 0, 0, 0.769);
  color: white;
}
.btn2 {
  background-color: #5d88ffa9;
  color: white;
}
.search {
  input {
    transition: width 0.5s ease-in-out;
    color: white;
    width: 14%;
    outline: none;
  }
  input:focus {
    width: 40%;
  }
}
::placeholder {
  color: rgba(255, 255, 255, 0.911);
}
</style>
