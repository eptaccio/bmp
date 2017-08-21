const gm = require('gm')
const im = require('imagemagick')
const qrcode = require('qrcode')
const text = 'http://www.dfeportal.fazenda.pr.gov.br/dfe-portal/rest/servico/consultaNFCe?chNFe=41170808187168000160658740000002051000003281&nVersao=100&tpAmb=2&cDest=05316687973&dhEmi=323031372d30382d30375431363a34363a31302d30333a3030&vNF=2&vICMS=0.00&digVal=613156567771484b664239657951342f455438566a3071616571553d&cIdToken=000001&cHashQRCode=BF7DDBD84BF7FA8DF11D4F60636109E57221BFBB'
// qrcode.toFile(`${process.cwd()}/qr.png`, text, {
//   color: {
//     dark: '#000000',  // Blue dots
//     light: '#FFFFFF' // Transparent background
//   }
// }, (error) => {

// })

// im.convert([`${process.cwd()}/qr.png`, '-resize', '240x240', '-monochrome', '-type', 'bilevel', `${process.cwd()}/qr.bmp`], (error, stdout) => {
// im.convert([`${process.cwd()}/qr.png`, '-resize', '240x240', '-monochrome', `${process.cwd()}/qr.bmp`], (error, stdout) => {
// im.convert([`${process.cwd()}/qr.png`, '-type', 'bilevel', '-resize', '240x240', '-monochrome', 'BMP2:', `${process.cwd()}/qr.bmp`], (error, stdout) => {
im.convert(['-resize', '240x240', `${process.cwd()}/qr.png`, '-type', 'bilevel', '-monochrome',`BMP2:${process.cwd()}/qr.bmp`], (error, stdout) => {
  if (error) throw error
})

// '-type', 'bilevel'


/**
funcona: im.convert(['-monochrome',`${process.cwd()}/qr.png`, '-resize', '240x240',`${process.cwd()}/qr.bmp`], (error, stdout) => {
 
 */