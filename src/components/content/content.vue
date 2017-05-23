<template>
  <div class="content">
    {{ message }}
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'content',
    props: [],
    data () {
      return {
        message: 'Hello world'
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
