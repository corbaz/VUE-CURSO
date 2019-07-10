const app = new Vue({
    el: "#app",
    data: {
        h1_Texto: 'Listado de Frutas',
        frutas: [
            {fruta: 'pera', cantidad: 10},
            {fruta: 'manzana', cantidad: 0},
            {fruta: 'platano', cantidad: 5}
        ],
        label_Fruta: 'Ingrese Fruta: ',
        label_Fruta_Boton: 'Nueva Fruta',
        Nueva_Fruta: "",
        label_Cantidad: 'Cantidad: ',
        total: 0
    },
    methods: {
        agregar_Fruta() {
            this.frutas.push({
                fruta: this.Nueva_Fruta,
                cantidad: 0
            });
            this.Nueva_Fruta = '';
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            let fruta;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})
