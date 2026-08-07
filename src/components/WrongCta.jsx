const WrongCta = ({label, picto, withPicto}) => {
    const wichPicto = picto?.length ? picto : `no-picture`
    return (
        <div className="cta__primaryWrong">
            <img src={`/img/${wichPicto}.webp`} alt={`Picto de ${label}`} /><span>{label}</span>
        </div>
    )
}

export default WrongCta