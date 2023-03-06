<template>
  <div class="register">
    <div class="box">
      <i class="el-icon-close" @click="close_register">
        <div class="content">
          <div class="nav">
            <span class="active">新用户注册</span>
          </div>
          <el-form>
            <el-input
              placeholder="用户名"
              prefix-icon="el-icon-username-outline"
              v-model="username"
              clearable
            >
              <el-row>
                <el-col :span="4"
                  ><div class="grid-content bg-purple"></div
                ></el-col>
              </el-row>
            </el-input>
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-key"
              v-model="password"
              clearable
              show-password
            >
            </el-input>
            <el-input
              placeholder="手机号"
              prefix-icon="el-icon-phone"
              v-model="mobile"
              clearable
              @blur="check_mobile"
            >
            </el-input>
          </el-form>
        </div>
      </i>
    </div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  data() {
    return {
      msg: "This is the register."
    };
  },
  methods: {}
};
</script>

<style></style>
