// importar o react
import React from "react";
// importar o sttilo
import'./Footer.css';
// funcao defalt que que constroi os elementos da pagina
function Footer(){
    // retorna os elementos visuais do componentes(paginas)
    return(
        <footer>
            <div class="sectionRodapeArea">
                <h3>Siga a gente nas redes sociais</h3>
                <div class="inputIconArea">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-tiktok"></i>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
    