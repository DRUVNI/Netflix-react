
export default function NetflixHeaderComponent()
{
    return(
        <>
        <div className="d-flex justify-content-between  m-3 p-3">
            <div>
            <h2 className="text-danger text-bold">NETFLIX</h2>
        </div>
        <div className="input-group w-25"> 
            <select className="form-select">
                <option>Language</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Telugu</option>
            </select>
            <button className="btn btn-danger ms-2">Sign-in</button>
        </div>
        </div>
        </>
    );
}