<template>
  <div>

    <div class='login-bg'>
      <div class='row m-l-4'>
        <div class='col-md-6 col-sm-12 trace-logo'>
          TRACE Master
        </div>
        <div class='col-md-6 col-sm-12'>
          <div class='login-right-text'>
            <h3 class='rtl'>PROTECTS WHAT'S GOOD</h3>
            <br/>
            <p class='rtl'>
              PROTECTS WHAT'S GOOD is our brand promise. It defines us and influences everything we do – not just the way we communicate, but also the way we carry out our individual roles.
            </p>
            <p class='rtl'>
              It is our pledge to consistently deliver a valuably different product and service.
            </p>
          </div>
        </div>
      </div>

      <div class='row m-l-4'>
        <div class='col-md-6'>

          <div class='mb-2 avatar'>
            <!-- Please use your credentials to login into the system. -->
          </div>
          <div class='p-1 rounded'>
            <form v-on:submit.prevent='login'>
              <div class='form-row'>
                <div class='col-md-5 bg-light rounded-left p-1'>
                  <div class='input-group input-group-sm'>
                    <div class='input-group-prepend login-icon'>
                      <awesome icon='user' />
                    </div>
                    <input type='text' name='username' class='form-control form-control-sm' v-model='input.username' placeholder='Username' aria-describedby='basic-addon1' autofocus />
                  </div>
                </div>
                <div class='col-md-5 bg-light rounded-right p-1'>
                  <div class='input-group input-group-sm'>
                    <div class='input-group-prepend login-icon'>
                      <awesome icon='lock' />
                    </div>
                    <input type='password' name='password' class='form-control form-control-sm' v-model='input.password' placeholder='Password' />
                  </div>
                </div>
                <div class='col-md p-1'>
                  <button type='submit' @click='login' class='btn btn-danger btn-sm btn-block'>GO</button>
                </div>
                <div class='col-md'>

                </div>
              </div>
            </form>
          </div>

          <div class='row mt-3'>
            <div class="col-md-6">
              <span>New user?</span> <a href='/reg'>Register here!</a>
            </div>
            <div class="col-md-6 remember-user">
              <input type="checkbox" v-model="remember" class="form-check-input" name="rememberUser" id="rememberUser" />
              <label for="rememberUser" class="form-check-label">Remember Me</label>
            </div>
          </div>

        </div>
        <div class='col'>

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
      },
      remember: true
    }
  },
  mounted () {

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

  margin-left: -50px;
  padding: 50px;
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
  font-size: 2.5em;
}
.login-icon {
  min-width: 25px;
  color: #999;
  align-items: center;
  justify-content: center;
}
.avatar {
  background-image: url('/static/images/login/avatarLogin.png');
  background-repeat: no-repeat;
  text-indent: 200px;
  line-height: 180px;
  min-height: 120px;
  margin-left: 20px
}
.rtl {
  direction: rtl;
  text-align: right;
}
.login-right-text {
  width: 350px;
  float: right;
  margin-right: 50px;
}
.remember-user {
  text-align: center;
}

@media only screen and (max-width: 575.98px) {
  .login-bg {
    padding: 0;
    min-height: 810px;
  }
  .trace-logo {
    text-indent: 160px;
    font-size: 2.3em;
  }
  .login-right-text {
    width: auto;
    margin: 5px;
  }
  .remember-user {
    text-align: start;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767.98px) {
  .login-bg {
    padding: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991.98px) {
  .login-bg {
    padding: 50px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199.98px) {
  .login-bg {
    padding: 100px;
  }
}
@media only screen and (min-width: 1200px) {
  .login-bg {
    padding: 100px;
    min-height: 940px;
  }
}
</style>
