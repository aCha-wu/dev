<template>
  <div>
    <button @click="goUrl">领取1</button>
    <button @click="goUrl2">领取2</button>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    change() {
      this.$store.commit("changea");
    },
    goUrl() {
      window.location.href =
        "https://testi.leagpoint.com/sip/weChat/toWeChatAuth?org=MALL&bankCode=6442&data=TdOckezcJ0OKWfk/ACdUay3YFHgRr9g6B2Zrj/oEGFeKINKGS8ulBmZzKaUGcNZ3AhjhKq14HMbYhA9iJco3+HufOeFFqQjw7X7KdhBVx72ZAM5HzbTQjALL4wltMAynCg5Psr0VpB9zNRrjIKeDqaXS/hNHzVgkVEb2qudKdvBsKdPEmyVBVtPAtA0dCcNRVCp+e6jigXSiLaHtswEhHkx5Uf0BDDKzBvSrsAPSsRpDLDYM3uRB2jZUiK1yCmVkryLeh2mvFZa0+ggIlns/aM6O4PEyfdIeoUvY9ivCemVuJjNAC6kh47eJHRgZ9yST/ATEdTdvS7ixFwxifkpOug==&sign=UtGrN+jSI/+2HSpL8RlAagoQViqd87BFCrJXolX/m53osVCYj6YmtRX1Me80gzwPPR64yTuKrW8E/M5i5pwRS2E6HL5f9unXRY79/Gm/v9oDo4E/6RIN8kGFFNgpFuvsnBOBMTb60SsIUKhgay3djFfEWgXzBkYaaG1siNS4tWI=";
    },
    goUrl2() {
      window.location.href =
        "https://testa.leagpoint.com/sip/weChat/toWeChatAuth?org=MALL&bankCode=6442&data=TdOckezcJ0OKWfk/ACdUay3YFHgRr9g6B2Zrj/oEGFeKINKGS8ulBmZzKaUGcNZ3AhjhKq14HMbYhA9iJco3+HufOeFFqQjw7X7KdhBVx72ZAM5HzbTQjALL4wltMAynCg5Psr0VpB9zNRrjIKeDqaXS/hNHzVgkVEb2qudKdvBsKdPEmyVBVtPAtA0dCcNRVCp+e6jigXSiLaHtswEhHkx5Uf0BDDKzBvSrsAPSsRpDLDYM3uRB2jZUiK1yCmVkryLeh2mvFZa0+ggIlns/aM6O4PEyfdIeoUvY9ivCemVuJjNAC6kh47eJHRgZ9yST/ATEdTdvS7ixFwxifkpOug==&sign=UtGrN+jSI/+2HSpL8RlAagoQViqd87BFCrJXolX/m53osVCYj6YmtRX1Me80gzwPPR64yTuKrW8E/M5i5pwRS2E6HL5f9unXRY79/Gm/v9oDo4E/6RIN8kGFFNgpFuvsnBOBMTb60SsIUKhgay3djFfEWgXzBkYaaG1siNS4tWI=";
    },
  },
};
</script>

<style scoped></style>
