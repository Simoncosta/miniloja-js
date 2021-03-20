const items = [
    {
        id: 0,
        nome: 'camisa',
        img: 'blusa.jpg',
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'short',
        img: 'short.jpg',
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'bone',
        img: 'bone.jpg',
        quantidade: 0,
    }
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');

    items.map((val) => {
        containerProdutos.innerHTML += `

        
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-stats">
                <div class="card-body ">
                    <div class="row">
                        <div class="col-5 col-md-4">
                            <div class="icon-big text-center icon-warning">
                                <img src="assets/img/`+ val.img +`">
                            </div>
                        </div>
                        <div class="col-7 col-md-8">
                            <div class="numbers">
                                <p>`+ val.nome +`</p>
                            </p></div>
                        </div>
                    </div>
                </div>
                <div class="card-footer ">
                    <hr>
                    <div class="stats">
                        <i class="nc-icon nc-bag-16"></i>
                        <a class="addProduto" key="`+ val.id +`" href="#">Adicionar ao carrinho</a> 
                    </div>
                </div>
            </div>
        </div>

        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val) => {

        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `

            
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-stats">
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-5 col-md-4">
                                <div class="icon-big text-center icon-warning">
                                    <img src="assets/img/`+ val.img +`">
                                </div>
                            </div>
                            <div class="col-7 col-md-8">
                                <div class="numbers">
                                    <p>`+ val.nome +`</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer ">
                        <hr>
                        <div class="stats">
                        <div class="numbers">
                            <p>Quantidade: `+ val.quantidade +`</p>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>

            `;
        }
    })
}

var links = document.getElementsByClassName('addProduto');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })    
}
