const axios = require('axios')
const cheerio = require('cheerio')
// required for jest test work
axios.defaults.adapter = require('axios/lib/adapters/http');

async function crawlar(args){
    const { url } = args
    let items = {}

    await axios({ url, method: 'get' })
        .then(resp => {
            let $ = cheerio.load(resp.data)
            items = { 
                        plano: 'PROFISSIONAL',
                        transferencia: $('#tarifas-2').find('.tarifas-2-2-2').text().trim(),
                        cobranca: $('#tarifas-2').find('.tarifas-2-1-2').text().trim(),
                        mensalidade: $('#tarifas-2').find('.tarifas-2-4-2').text().trim().replace(/(\r\n|\n|\r)/gm," ")
                    }
        })
        .catch(err => { 
            console.log(err) 
            items = { error: true, message: "Ocorreu um erro na sua requisicão verifique os parametros e tente novamente!" }
        })

        return items 
}

// exports
exports.crawlar = async (req, res, next) => {
    const items = await crawlar(req.body)
    if(items.error){
        res.status(400).json(items)
    }else if(items.mensalidade == ''){
        res.status(400).json( { error: true, message: "A URL informada não é aceita." } )
    }else{
        res.status(200).send(items);
    }
};