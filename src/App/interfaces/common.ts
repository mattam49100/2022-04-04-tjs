export default interface I_Meme{
    id?:number
    text:string
    x:number
    y:number
    fontWeight:string
    fontSize:number
    underline:boolean
    italic:boolean
    imageId:number |null
};
export const DummyMeme:I_Meme={
    text:"Hello world",
    x:50,
    y:100,
    fontWeight:'900',
    fontSize:30,
    underline:true,
    italic:false,
    imageId:0
};
export interface Image{
    id:number
    url:string
    w:number
    h:number
    name:string
};