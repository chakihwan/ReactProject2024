import React from 'react';

function RequestForm(props){
    const [details, setDetails] = React.useState('');

    const handleChange = (event) => {
        setDetails(event.target.value);
    }
    const handleSubmit = (event) => {
        alert(`입력한 요청사항 : ${details}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항 :
                <textarea value = {details} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default RequestForm;