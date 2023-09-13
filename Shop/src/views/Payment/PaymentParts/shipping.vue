<template>
  <div class="Methods">
    <h3 class="p-3">Shipping Method</h3>
    <div class="box">
      <form action="POST">
        <div
          v-for="(method, index) in shippingMethods"
          :key="index"
          class="method"
        >
          <div class="name-method">
            <input type="radio" v-model="selectedMethod" :value="method" id="outline" class="custom-radio" />
            <label class="fs-5" for="outline">{{ method.name }}</label>
            <div class="ms-4 ps-2">
              <p class="p-0 m-0">{{ method.deliveryTime }}</p>
            </div>
          </div>
          <span class="sallary-method">{{ method.cost }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMethod: null,
      shippingMethods: [
        {
          name: "Free Shipping",
          deliveryTime: "Delivery in 5-7 working days",
          cost: "Free",
        },
        {
          name: "Local Pickup from store",
          deliveryTime: "Delivery in 5-7 working days",
          cost: "$8.00",
        },
        {
          name: "Standard Shipping",
          deliveryTime: "Delivery in 1-2 working days",
          cost: "$11.00",
        },
        {
          name: "Same-Day Shipping",
          deliveryTime: "-",
          cost: "$40.00",
        },
      ],
    };
  },
  mounted() {
    console.log(this.selectedMethod);
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 35rem;
  padding: 10px;
}
.method {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .name-method {
    label {
      padding: 10px;
    }
  }
  .sallary-method {
    font-size: 20px;
    font-weight: 700;
  }
}
input[type="radio"] {
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 0.5rem;
}
input,
label {
    cursor: pointer;
}
.custom-radio {
    /* hiding browser el */
    appearance: none;
    /* Safari support */
    -webkit-appearance: none;
    border: 0.2rem solid #fff;
    background-color: gray;
    // height: 20%;
    // width: 20%;
    border-radius: 50%;

}
.custom-radio:focus-visible {
    outline-offset: 0;
}
#outline {
    outline: 1px solid rgba(128, 128, 128, 0.719);
}

#outline:hover {
    outline-color: red;
}

#outline:checked {
    outline-color: red;
    background-color: red;

    animation: outline-checked;
    animation-duration: 0.1s;
    animation-iteration-count: 4;
    animation-direction: alternate;
    animation-timing-function: linear;
}

@keyframes outline-checked {
    0% {
        outline-offset: 0;
    }

    100% {
        outline-offset: -0.2rem;
    }
}
</style>
