export function getAllNotes(req, res) {
    res.status(200).send("you got 5 notes")
};

export function createNote(req, res) {
    res.status(201).json({message:"created successfully"})
};

export function updateNote(req, res) {
    res.status(200).json({message:"updated successfully"})
};

export function deleteNote (req, res) {
    res.status(200).json({message:"deleted successfully"})
};