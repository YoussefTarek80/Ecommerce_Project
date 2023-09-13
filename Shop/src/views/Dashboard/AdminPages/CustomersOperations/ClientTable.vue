<template>
  <section>
    <div class="p-3">
      <div>
        <h1 class="text-light p-4">List of Clients</h1>
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
          <th>Phone</th>
          <th>Address</th>
          <th>Status</th>
          <th>Cart Items</th>
          <th>Delete Account</th>
        </tr>
        <tr v-for="user in getAllArrayClients">
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.address }}</td>
          <td><span class="status-badge success">Active</span></td>
          <td>{{ user.cart.length }}</td>
          <td>
            <button class="btn btn1" @click="deleteUser(user._id)">
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    getAllArrayClients() {
      return this.$store.getters["admins/getUsers"];
    },
  },
  mounted() {
    this.$store.dispatch("admins/fetchUsersArray");
    this.filteredArray();
  },
  methods: {
    async deleteUser(id) {
      try {
        await this.$store.dispatch("admins/fetchAndDeleteUser", id);
      } catch (error) {
        console.error("Error deleting ", error);
      }
    },
    async filteredArray() {
      try {
        console.log(this.getAllArrayClients);
      } 
      catch {
        console.log('error');
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
