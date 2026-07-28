import './Bloc.scss'

const Bloc = ({wichBloc, type, picto, titleContenu, contenu, classSuplementaire}) => {
    const classNameBloc = `bloc__${wichBloc}`
    const wichType = !type ? 'primary' : type;
    const wichPicto = !picto ? 'no-picture' : picto;
    return (
        <div className={`bloc ${wichType} ${classNameBloc} ${classSuplementaire}`} >
            {titleContenu ? <h2 className='bloc__title'>{picto !== 'empty' ? <img src={`./img/${wichPicto}.png`} /> : ''}{titleContenu}</h2> : ''}
            <div className="bloc__container">{contenu}</div>
        </div>
    )
}
export default Bloc