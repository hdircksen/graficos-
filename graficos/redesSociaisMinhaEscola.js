import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesSociaisMinhaEscola() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-sociais-escola.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent',
            textfont: { color: '#FFFFFF' }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Redes sociais preferidas na minha escola',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            },
            x: 1.1,  // Ajuste a posição para a direita
            y: 0.5,
            orientation: 'v'
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Na escola, as redes sociais têm um papel importante na interação entre os alunos. Apesar das tendências globais, as preferências locais mostram que o <span>Instagram</span> continua sendo amplamente utilizado, mas outras redes como o <span>WhatsApp</span> e o <span>TikTok</span> também possuem grande destaque.`)
}

redesSociaisMinhaEscola()
