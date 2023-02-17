import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function expand(){
        setExpanded(true);
    }


    function submitNote(e){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }

    return(
        <div>
           <form className="create-note">

            {isExpanded && (
                <input  type="text"
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        onChange={handleChange}
                         />
            )}


                <textarea
                    name="content"
                    id="content"
                    rows={isExpanded ? 3 : 1}
                    onChange={handleChange}
                    onClick={expand}
                    value={note.content}
                    placeholder="Take a note..."
                    />
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>

           </form>
        </div>
    )
}

export default CreateArea