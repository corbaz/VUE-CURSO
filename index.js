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
            if (this.Nueva_Fruta !== null && this.Nueva_Fruta !== "") {
                this.frutas.push({
                    fruta: this.Nueva_Fruta,
                    cantidad: 0
                });
                this.Nueva_Fruta = '';
            } else {
                this.Nueva_Fruta = prompt(
                    "Ingrese una Fruta",
                    "Cereza"
                );
                if (this.Nueva_Fruta == null || this.Nueva_Fruta === "") {
                    this.Nueva_Fruta = '';
                } else {
                    $("#B_Nueva_Fruta").click();
                }
            }
        },
        colores(cantidad) {
            return {
                'bg-danger': cantidad <= 0,
                'bg-warning': cantidad > 0 && cantidad <= 25,
                'bg-success': cantidad > 25 && cantidad <= 50,
                'bg-info': cantidad > 50 && cantidad <= 100
            }
        },
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            let fruta;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        },
    }
});
