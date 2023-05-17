<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col cols="7">
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="7">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="이름:" label-for="input-1">
            <b-row>
              <b-col cols="9"
                ><b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  placeholder="이름을 입력해주세요"
                  required
                >
                </b-form-input
              ></b-col>
              <b-col cols="3"><b-button>중복확인</b-button></b-col>
            </b-row>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="아이디:"
            label-for="input-2"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-2"
              v-model="form.id"
              placeholder="아이디를 입력해주세요"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label="비밀번호:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="이메일:" label-for="input-4">
            <b-row>
              <b-col cols="6"
                ><b-form-input
                  id="input-4"
                  v-model="form.email"
                  placeholder="이메일을 입력해주세요"
                  required
                ></b-form-input
              ></b-col>
              <b-col cols="1">@</b-col>
              <b-col cols="5"
                ><b-form-select
                  id="input-5"
                  v-model="form.domain"
                  :options="domains"
                  required
                ></b-form-select
              ></b-col>
            </b-row>
          </b-form-group>
          <b-button type="submit" variant="primary">회원가입</b-button>
          <b-button type="reset" variant="danger">초기화</b-button>
        </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "MemberRegister",
  data() {
    return {
      form: {
        name: "",
        id: "",
        password: "",
        email: "",
        domain: "",
      },
      domains: [
        { value: "naver.com", text: "네이버" },
        { value: "daum.com", text: "다음" },
        { value: "google.com", text: "구글" },
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.show = false;

      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>
