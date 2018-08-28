<template>
<div>
  <canvas ref="canvas"></canvas>
</div>
</template>

<script>
import QRCode from 'qrcode';

export default {
  mounted() {
    QRCode.toCanvas(this.$refs.canvas, this.$route.query.text || "hello");
  }
}
</script>
