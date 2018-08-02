<template>
  <div>

    <div class="login-bg p-5">
      <div class="row m-l-4">
        <div class="col-6 trace-logo">
          Trace Master
        </div>
        <div class="col-6">
          <h3>PROTECTS WHAT'S GOOD</h3>
          <p>
            PROTECTS WHAT'S GOOD is our brand promise. It defines us and influences everything we do – not just the way we communicate, but also the way we carry out our individual roles. It is our pledge to consistently deliver a valuably different product and service.
          </p>
        </div>
      </div>

      <div class="row m-l-4">
        <div class="col-6">

          <div class="mb-2 avatar">
            Please use your credentials to login into the system.
          </div>
          <div class="p-1 rounded">
            <form v-on:submit.prevent="login">
              <div class="form-row">
                <div class="col-5 bg-light rounded-left p-1">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend login-icon">
                      <awesome icon="user" />
                    </div>
                    <input type='text' name='username' class="form-control form-control-sm" v-model='input.username' placeholder='Username' aria-describedby="basic-addon1" autofocus />
                  </div>
                </div>
                <div class="col-5 bg-light rounded-right p-1">
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend login-icon">
                      <awesome icon="lock" />
                    </div>
                    <input type='password' name='password' class="form-control form-control-sm" v-model='input.password' placeholder='Password' />
                  </div>
                </div>
                <div class="col p-1">
                  <button type='submit' v-on:click='login()' class="btn btn-danger btn-sm">GO</button>
                </div>
              </div>
            </form>
          </div>

          <div class="mt-2">
            <span>New user?</span> <a href="/reg">Register here!</a>
          </div>

        </div>
        <div class="col-6">

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (
          this.input.username === this.$parent.mockAccount.username &&
          this.input.password === this.$parent.mockAccount.password
        ) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'Dashboard' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style>
  .login-bg {
    background-image: url('/static/images/login/backgroundLogin.jpg');
    min-height: 760px;
    margin-left: -50px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    color: aliceblue;
  }
  .trace-logo {
    color: #00c0ef;
    background-image: url('/static/images/login/logoLogin.png');
    background-repeat: no-repeat;
    height: 200px;
    text-indent: 200px;
    line-height: 180px;
    font-size: 3rem;
  }
  .login-icon {
    min-width: 25px;
    color: #999;
    align-items: center;
    justify-content: center;
  }
</style>
