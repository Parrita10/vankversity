class VankApp {
    constructor() {
        this.app = document.getElementById('app');
        this.navButtons = document.querySelectorAll('.navBtn');
        this.user = {
            nombre: "Usuario",
            monto: 1000,
            transacciones: []
        };

        this.initEventListeners();
        this.renderHome();
    }

    initEventListeners() {
        this.navButtons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const view = event.target.dataset.view;
                this.navigateTo(view);
            });
        });
    }

    navigateTo(view) {
        switch(view) {
            case "inicio":
                this.renderHome();
                break;
            case "añadirTransaccion":
                this.renderAddTransaction();
                break;
            case "transacciones":
                this.renderTrasactions();
                break;
            case "configuracion":
                this.renderSettings();
                break;
        }
    }

    renderHome() {
        this.app.innerHTML = `
        <h2>Bienvenido, ${this.user.nombre}</h2>
        <p>Presupuesto disponible: ${this.user.monto}</p>
        `;
    }

    renderAddTransaction() {
        this.app.innerHTML = `
        <h2>Añadir transaccion </h2>
        <form id="transaction-form">
            <input type="text" id="descripcion" placeholder="Descripcion" required>
            <input type="number" id="cantidad" placeholder="Monto" required>
            <select id="type" required>
                <option value="ingreso">Ingreso</option>
                <option value="egreso">Egreso</option>
            </select>
            <button type="submit">Añadir</button>
        </form>
        `;
        document.getElementById('transaction-form').addEventListener('submit', this.addTransaction.bind(this));
    }

    addTransaction(event) {
        event.preventDefault();
        const descripcion = document.getElementById('descripcion').value;
        const monto = parseFloat(document.getElementById('cantidad').value);
        const type = document.getElementById('type').value;

        this.user.transacciones.push({descripcion, monto, type});
        if(type === "ingreso") {
            this.user.monto += monto;
        } else {
            this.user.monto -= monto;
        }

        alert("Transaccion fue añadida correctamente");
        this.renderHome();
    }

    renderTrasactions() {
        const transactionRows = this.user.transacciones.map((t, i) => `
        <tr>
            <td>${i+1}</td>
            <td>${t.descripcion}</td>
            <td>${t.type === 'ingreso' ? '+' : '-'}$${t.monto}</td>
        </tr>
        `).join('');

        this.app.innerHTML = `
            <h2>Lista de transacciones</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descripcion</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                 ${transactionRows || '<tr><td colspan="3">No hay transacciones registradas.</td></tr>'}
                </tbody>
            </table>
        `;
    }

    renderSettings() {
        this.app.innerHTML = `
        <h2>Configuracion</h2>
        <form id="settingsForm">
            <input type="text" id="name" placeholder="Nombre del usuario" value="${this.user.nombre}" required>
            <input type="number" id="monto" placeholder="Presupuesto inicial" value="${this.user.monto}" required>
            <button type="submit">Guardar</button>
        </form>
        `;
        document.getElementById('settingsForm').addEventListener('submit', this.updateSettings.bind(this));
    }

    updateSettings(event) {
        event.preventDefault();
        const nombre = document.getElementById('name').value;
        const monto = parseFloat(document.getElementById('monto').value);

        this.user.nombre = nombre;
        this.user.monto = monto;

        alert("Configuracion actualizada");
        this.renderHome();
    }
}

new VankApp();