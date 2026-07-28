import './BurgerPicto.scss'

const BurgerPicto = ({state}) => {
    return (
        <div className={`${state} burgerPicto`}>
            <div className="burgerPicto__container">
                <div className={`first burgerPicto__barre`}></div>
                <div className={`${state === 'open' ? 'hidden' : ''} burgerPicto__barre`}></div>
                <div className={`last burgerPicto__barre`}></div>
            </div>
        </div>
    )
}

export default BurgerPicto