import './MainBlock.scss';

export default function MainBlock(props) {

    return (
        <>
            <main className="block">
                <section className='block__internal'>
                    {props.children}
                </section>
            </main>
        </>
    )
}