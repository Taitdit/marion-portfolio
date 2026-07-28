const WrongCta = ({label, picto, withPicto}) => {
    const wichPicto = !picto && `no-picture`
    return (
        <div className="cta__primaryWrong">
            <img src={`./img/${wichPicto}.png`} alt={`Picto de ${label}`} /><span>{label}</span>
        </div>
    )
}

export default WrongCta