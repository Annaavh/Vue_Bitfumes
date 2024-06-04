import { onMounted,onUnmounted} from "vue";

export default function useWindowEvent(eventName,handleKeyword){
    onMounted(() => {
        window.addEventListener(eventName, handleKeyword)
    });
    onUnmounted(() => {
        window.removeEventListener(eventName,handleKeyword)
    })
}