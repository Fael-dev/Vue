export default class FotoService{
    constructor(resource){
        this._resource = resource('v1/fotos{/id}');
    }
    lista(){
        return this._resource
        .query()
        .then(res => res.json());
    }
    cadastro(foto){
        return this._resource.save(foto)
    }
    apaga(id){
        return this._resource.delete({ id:id });
    }
    busca(id){
      return this._resource.get({ id }).then(res => res.json());
    }
}
