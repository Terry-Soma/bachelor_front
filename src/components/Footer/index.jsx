import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { BsLinkedin, BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsFillEnvelopeFill } from 'react-icons/bs';

import Logo from './../../assets/logowhite.png';
import Insta from './../../assets/insta.png';
export default function Footer() {
  return (
    <footer className="my__footer text-center text-lg-start text-muted pt-5">

      <section className='p-4 border-bottom'>
        <div className="container  text-white text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <span className='d-flex align-items-center justify-content-center mb-4 justify-content-lg-start'>
                <img
                  src={Logo}
                  className="d-inline-block align-top"
                  alt="Их засаг лого"
                  height="50px"
                />
                <h6 className="text-uppercase mb-0 ms-4 fs-4">
                  ИХ ЗАСАГ
                </h6>
              </span>
              <p>
                Их Засаг ОУИС мэдлэгийг үйлдвэрлэгч, баялгийг бүтээгчдийг
                төрүүлэх, оюутан суралцагчдын ажил амьдралын баталгааг
                хангахад чиглэгдсэн сургалт, судалгаа, инновацийн бүтээлч
                чадамжтай, судалгааны их сургууль байна.
              </p>
            </div>

            <div className="col-md-2 col-lg-3 col-xl-2  mx-auto mb-4 mt-4">
              <h6 className="text-uppercasemb-lg-4 ms-4 fs-4 mb-4">Цэс</h6>
              <ul>
                <li>
                  <Link to="/info" className="text-reset">
                    Хөтөлбөрүүд
                  </Link>
                </li>
                <li>
                  <Link to="/school" className="text-reset">
                    Салбар сургууль
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-reset"
                    to="/help"
                    onClick={() => setExpanded(false)}
                  >
                    Тусламж
                  </Link>
                </li>

                {/* Ectx.state.burtgel_Id && Ectx.state.email ? */}
                {(1 > 2) ? (
                  <>
                    <li>
                      <Link className="text-reset" to="/my-info">
                        Хувийн мэдээлэл
                      </Link>
                    </li>
                    <li>
                      <Link className="text-reset" to="/logout">
                        Гарах
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link className="text-reset" to="/login">
                      Бүртгүүлэх
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3  text-white  mx-auto mt-4 mb-4">
              <h6 className="text-uppercase  mb-4 fs-5">Холбоо барих</h6>
              <p className='mb-3 pt-4'>
                <FaMapMarkerAlt />
                <span> Монгол Улс Улаанбаатар хот.
                  Баянзүрх дүүрэг, 4 дүгээр хороо, Б.Доржийн гудамж, Их Засаг
                  цогцолбор
                </span>
              </p>
              <p className='d-flex gap-2 align-items-center justify-content-center justify-content-lg-start  mb-3'>
                <BsFillEnvelopeFill />
                <span> info@ikhzasag.edu.mn</span>
              </p>
              <p>
                <FaPhoneAlt /> +976 70157768, 7015-7761,
                7015-7765
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="" style={{ background: "hsl(0, 5%, 92%)" }}>

        <div className='d-flex justify-content-between align-items-center gap-4 p-4 border-bottom ' style={{ maxWidth: "600px", margin: "0 auto" }}>
          <a href="https://www.facebook.com/ikhzasag" target="_blanks" className="me-4 text-reset">
            <FaFacebook fontSize="4rem" color='#1877F2' />
          </a>
          <a href="https://twitter.com/IkhzasOfficial" target="_blanks" className="me-4 text-reset">
            <SiTwitter fontSize="4rem" color='#1DA1F2' />
          </a>
          <a href="https://www.facebook.com/ikhzasag" target="_blanks" className="me-4 text-reset">
            <FcGoogle fontSize="4rem" />
          </a>
          <a href="https://www.facebook.com/ikhzasag" target="_blanks" className="me-4 text-reset">
            <img src={Insta} alt="insta" />
          </a>
          <a href="https://www.facebook.com/ikhzasag" target="_blanks" className="me-4 text-reset">
            <BsLinkedin fontSize="4rem" color='#0A66C2' />
          </a>
        </div>
      </section>
      <div
        className="text-center p-4 text-white "
        style={{ background: "rgba(0, 0, 0, 0.05)" }}
      >
        &copy; {new Date().getFullYear()} :{' '}
        <a href="https://ikhzasag.edu.mn" className='text-white '>ИХ ЗАСАГ ОЛОН УЛСЫН ИХ СУРГУУЛЬ</a>
      </div>
    </footer>
  )
}
