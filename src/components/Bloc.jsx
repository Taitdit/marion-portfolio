import './Bloc.scss'

const Bloc = ({wichBloc, type, picto, titleContenu, contenu, classSuplementaire}) => {
    const classNameBloc = wichBloc ? `bloc__${wichBloc}` : ''
    const wichType = !type ? 'primary' : type;
    const wichPicto = !picto ? 'no-picture' : picto;
    const classSuplementaireBloc = classSuplementaire ? classSuplementaire : ''
    return (
        <div className={`bloc ${wichType} ${classNameBloc} ${classSuplementaireBloc}`} >
            {titleContenu ? <h2 className='bloc__title'>{picto !== 'empty' ? <img src={`./img/${wichPicto}.png`} /> : ''}{titleContenu}</h2> : ''}
            <div className="bloc__container">{contenu}</div>
        </div>
    )
}
export default Bloc