import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>


            <form>
                <label>
                    Nome da categoria:
                    <input
                        type="text"
                    />

            <button>
                Cadastrar
            </button>
                </label>
            </form>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;