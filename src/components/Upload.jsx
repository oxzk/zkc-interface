import Button from "@mui/material/Button";

const Upload = () => {

    return (
        <Button sx={{
            width: '100%',
            height: '350px',
        }}>
             <input accept="image/*" multiple type="file"  name="file"/>
        </Button>
    );
   
}

export default Upload

