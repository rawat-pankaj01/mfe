import {createApp} from 'vue';
import Dashboard from './component/Dashboard.vue';


// Mount function to start
const mount = (el) => {
   const app = createApp(Dashboard);
   app.mount(el);
};

// Dev in isolation call mount immediately

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {
        mount(devRoot)
    }

}
// In container export

export { mount };