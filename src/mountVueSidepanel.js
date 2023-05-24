import { createApp } from "vue"
import App from "./App.vue"

export default function mountVueSidepanel(selector) {
	createApp(App).mount(selector)
}
