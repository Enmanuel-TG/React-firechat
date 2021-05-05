const Channel = ({ user = null }) => {

    const [message, setMessage] = useState([]);
    useEffect(() => {
        const query = db.collection("messages").orderBy("createdAt").limit(100);

        const unsubscribe = query.onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
               setMessages(data);
        });
        return unsubscribe;
    }, [])
    return (    <ul>
        {message.map(message => (
            <li key={message.id}>  {message.text}</li>
        ))}
    </ul>
    );
};

export default Channel;