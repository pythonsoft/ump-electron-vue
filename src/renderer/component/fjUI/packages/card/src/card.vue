<template>
  <a class="fj-card" :style="cardStyle" @click.prev="handleClick">
    <div class="fj-card-thumb" ref="cardThumbWrap" :style="thumbStyle">
      <img class="fj-card-pic" :src="selfThumb" :alt="title" @error="imgError">
      <div class="fj-card-thumb-mask">
        <i v-if="editable" class="fj-card-delete-btn iconfont icon-close" @click.stop="$emit('delete-item')"></i>
        <span class="fj-card-video-duration">{{ duration }}</span>
        <span :class="['fj-card-video-definition', `_${definition}`]">{{ definition }}</span>
      </div>
    </div>
    <div class="fj-card-meta-data">
      <div :class="['fj-card-title', { 'highlight': highlight }]" v-html="title"></div>
      <span class="fj-card-desc">{{ time }}</span>
    </div>
  </a>
</template>
<script>
  import defaultPic from './video-default-pic.png';
  import errorPic from './video-error-pic.png';

  export default {
    name: 'FjCard',
    props: {
      link: String,
      title: String,
      time: String,
      thumb: {
        type: String,
        default: defaultPic
      },
      width: {},
      duration: String,
      definition: String,
      highlight: {
        type: Boolean,
        default: true
      },
      editable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        thumbStyle: {},
        selfThumb: this.thumb
      };
    },
    watch: {
      thumb(val) {
        this.selfThumb = val;
      }
    },
    computed: {
      cardStyle() {
        if (this.width) return { width: this.width };
        return null;
      }
    },
    mounted() {
      const width = this.$refs.cardThumbWrap.getBoundingClientRect().width;
      const height = width * 9 / 16;
      this.thumbStyle = { height: `${height}px` };
    },
    methods: {
      imgError(e) {
        this.selfThumb = errorPic;
        console.log('imgError');
      },
      handleClick(e) {
        this.$emit('click-card', e);
      }
    }
  };
</script>
