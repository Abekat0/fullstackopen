const FeedbackMsg = ({ msg, style }) => {
    if (msg === null) return null
    return (
        <div className={style === "error" ? "error-msg" : "successful-msg"}>
            {msg}
        </div>
    )
}

export default FeedbackMsg