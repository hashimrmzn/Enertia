import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function MainLayout({ children }) {
  return (
    <>
     <Header />

      <main>
        <div className='container'>
        {children}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
