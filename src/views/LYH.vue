<template>
  <div class="LYH">
    <div id="container"></div>
  </div>
</template>

<script>
import PDFJS from "pdfjs-dist";
import { TextLayerBuilder } from "pdfjs-dist/web/pdf_viewer";
import "pdfjs-dist/web/pdf_viewer.css";
PDFJS.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.js";
import Vue from 'vue';

var container;
export default {
  name: "LYH",
  props: {
    msg: String
  },
  data() {
    return {
        fullscreenLoading: false
    };
  },
  mounted() {
    this.$nextTick(() => {
        let url = "http://121.196.60.135/cdn/%E9%BE%99%E9%98%B3%E6%B9%96%E6%8B%9B%E5%95%8602.pdf";
        this.getPDF(url);
    });
  },
  methods: {
    async getPDF(url) {
        const loading = this.$loading({
            lock: true,
            text: '文件较大，正在加载...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        let pdf = await PDFJS.getDocument(url)
        loading.close();
        container = container || document.querySelector('#container')
        for(let i = 0; i < pdf.numPages; i++) {
            try{
                await this.rendPDF(pdf, i)
            } catch(e) {
                // console.error(e)
            }
        }
    },
    async rendPDF(pdf, num) {
        let page = await pdf.getPage(num)
        // 设置展示比例
        let pageDiv = document.createElement('div');
        pageDiv.setAttribute('id', 'page-' + (page.pageIndex + 1));
        pageDiv.setAttribute('style', 'position: relative');
        container.appendChild(pageDiv);
        let canvas = document.createElement('canvas');
        pageDiv.appendChild(canvas);
        let context = canvas.getContext('2d');
        let dpr = window.devicePixelRatio || 1;
        let bsr =
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;
        let ratio = dpr / bsr;
        let viewport = page.getViewport(
          screen.availWidth / page.getViewport(1).width
        );
        canvas.width = viewport.width * ratio;
        canvas.height = viewport.height * ratio;
        canvas.style.width = viewport.width + "px";
        canvas.style.height = viewport.height + "px";
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        let renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        
        await page.render(renderContext);
        // debugger
        let textContent = await page.getTextContent()
        // 创建文本图层div
        const textLayerDiv = document.createElement('div');
        textLayerDiv.setAttribute('class', 'textLayer');
        textLayerDiv.setAttribute('style', `width: ${viewport.width}px; margin: 0 auto;`)
        // 将文本图层div添加至每页pdf的div中
        pageDiv.appendChild(textLayerDiv);
        
        // 创建新的TextLayerBuilder实例
        var textLayer = new TextLayerBuilder({
            textLayerDiv: textLayerDiv,
            pageIndex: page.pageIndex,
            viewport: viewport
        });
        
        textLayer.setTextContent(textContent);
        
        textLayer.render();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>