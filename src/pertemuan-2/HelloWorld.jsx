export default function HelloWorld(){

    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            
            <UserCard nama="Rafif" nim="123456789" tanggal="20 Juni 2024"/>
            <UserCard nama="Nabil" nim="123456789" tanggal="20 Juni 2024"/>
            <UserCard {...propsUserCard}/>
            <QuoteText/>

            
        </div>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div className="card">
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}
function GreetingBinjai(){
    return (
            <small>Salam dari Binjai🧑‍🦲🧑‍🦲</small>
    )
}

function UserCard(props){
    return (
        <div className="card">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}