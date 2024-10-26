import "./App.css";
import { useState } from "react";
export default function Contact(){
 const [cont,setcont]=useState([{id:1,fn:"amine salmi",ln:"0654782569",em:"amine22@gmail.com"},
                                {id:2,fn:"karim dada",ln:"0746825599",em:"dada44@gmail.com"},
                                {id:3,fn:"khalid salhi",ln:"0688469132",em:"salhi@gmail.com"}])

const [idx,setidx] =useState(5)     ;let k=idx               
const [toadd,settoadd]=useState({id:4,fn:"write the name",ln:"write the Phone",em:"write the email"})
const [toup,setup]=useState({fn:"",ln:"",em:""})
const [visib,setvisib]=useState({btnup:"none",btnadd:"none",ids:0})
const listc = cont.map((con)=>{
    return <tr>
        <td>{con.fn}</td>
        <td>{con.ln}</td>
        <td>{con.em}</td>
        <td><button onClick={()=>{btndel(con.id)}} > delete</button><button onClick={()=>{btnup(con.id,con.fn,con.ln,con.em)}}>update</button></td>
        </tr>                })
        function btnadd(){
            setvisib({...visib,btnadd:"none"});
            settoadd({...toadd,id:idx})
            setcont([...cont,toadd]);
            setidx(idx+1);
        }
        function btndel(x){

               const newcont=cont.filter((con)=>{if(con.id=== x)return false; else return true})
               setcont(newcont)
               
        }
        function btnup(n,f,l,e){
           setup({...toup,fn:f,ln:l,em:e})
           setvisib({...visib,btnup:"",ids:n})
        }
        function edit(){
            setcont(con =>con.map(cont=>cont.id===visib.ids ?{...cont,fn:toup.fn,ln:toup.ln,em:toup.em}:cont));setvisib({...visib,btnup:"none"})
                     }
                    

    return(
        <div><div className="App">
            <h1>simple crud App contact</h1>
            <button onClick={()=>{ setvisib({...visib,btnadd:""})}}>create+</button>
            <table>
                <tr>
                    <td>FullName</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
                {listc}
            </table></div>
            <div className="create" style={{display:visib.btnadd}}>
                <div className="App1">
                <h1>Add New Contact</h1>
                <br/>
                <input  value={toadd.fn} onChange={(e)=>{settoadd({...toadd,fn:e.target.value})}}></input>
                <br/>
                <input  value={toadd.ln} onChange={(e)=>{settoadd({...toadd,ln:e.target.value})}}></input>
                <br/>
                <input  value={toadd.em} onChange={(e)=>{settoadd({...toadd,em:e.target.value})}}></input>
                <br/>
                <button onClick={btnadd}>submet</button>
                </div>
            </div>
            <div className="create" style={{display:visib.btnup}}>
                <div className="App1">
                <h1>update Contact</h1>
                <br/>
                <input value={toup.fn} onChange={(e)=>{setup({...toup,fn:e.target.value})}}></input>
                <br/>
                <input value={toup.ln} onChange={(e)=>{setup({...toup,ln:e.target.value})}}></input>
                <br/>
                <input value={toup.em} onChange={(e)=>{setup({...toup,em:e.target.value})}}></input>
                <br/>
                <button onClick={edit}>update</button>
                </div>
            </div>

        </div>
    )

}