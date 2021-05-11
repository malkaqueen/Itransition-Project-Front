import React from "react";
import Search from "./Search";

//добавить линки для пунктов меню
//сделать так, чтобы на маленьком экране переносилось в боковую менюшку
//добавить серч и выдвигающийся инпут как отдельный компонент
//добавить иконку войти, при нажатии на которую будет выскакивать модалка для входа или перекидывать нас стр регистрации, а для заре
//гистрированного будет модалка с инфой и сеттингами
//добавить выбор языка и свитчер темы

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <a  href='/' className="navbar-brand col-lg-4 col-md-4 col-sm-6 ps-5 ms-3 desc">
                <h1>
                    <img src="food.png" alt="" width="30" height="24"
                         className="d-inline-block align-text-center"/>
                    Funduk
                </h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-lg-4 col-md-4 col-sm-6 desc" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link">My Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">My Bonuses</a>
                    </li>
                    <li className="nav-item">
                        <Search/>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse col-lg-2 col-md-2 col-sm-3 desc" id="navbarSupportedContent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         className="bi bi-person-circle" viewBox="0 0 20 20">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
            </div>
        </nav>
    )
}
