import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Container:styled.section`
        top:0;
        right:0;
        bottom:0;
        left:0;        
        display:flex;
        flex-direction: row;
    `,
    BoxLeft:styled.div`
        background-color:var(--blue-strong);
        width:250px;
        height: 100%;
        padding: 10px;
        position:fixed;
    `,
    BoxViews:styled.div``,
    BoxTitle:styled.div`
        margin-bottom:10px;
        margin-top:10px;
    `,
    InsertionTitle:styled.strong`
        color:var(--grey-soft);
        font-size:25px;
        font-family:'Roboto', sans-serif;
        font-weight: 700;
    `,
    BoxInsertion:styled.div``,
    LinkText:styled.p`
        font-family: 'Roboto', sans-serif;
        font-size:16px;
        color:#FFF;
        text-align:center;
        transition:all ease .2s !important;
        cursor: pointer;
        padding:4px;
        transform:scale(0.96);

        :hover {
            transform:scale(1);
        }
    `,
    Logout:styled.button`
        position:fixed;
        bottom:0;
        left:0;
        width:250px;
        border:none;
        outline:none;
        cursor:pointer;
        height: 50px;
        background-color:var(--blue-relative);
        color: #FFF;
        font-weight:bold;
        font-size:18px;
        
        :hover {
            font-style: italic;
        }
        `,
    BoxRight:styled.div`
        display:flex;
        flex:1;
        flex-direction: column;
        padding-left:280px;
        padding-right:30px;
        padding-top:20px;
        background-color: var(--grey-soft);
        min-height: 100vh;
    `,

    BoxContent: styled.section`
        display: flex;
        background-color: var(--blue-relative);
        width: 100%;
        height: 60px;
        margin-bottom: 20px;
    `,

    BoxAreaLeft: styled.div`
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;

        form {
            background-color: #FFF;
            border-radius: 5px;
            padding: 10px;
            box-shadow: 0px 0px 3px #999;
        }

        .areaLabel {
            display: flex;
            padding: 10px;
            width: 400px;
        }

        .area-input {
            flex: 1;

            input {
            width: 100%;
            font-size: 14px;
            height: 30px;
            padding: 5px;
            border: 1px solid var(--blue-gray);
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            outline: 0;
            transition: all ease 0.4s;

                &:focus {
                    border: 1px solid var(--blue-relative);
                    color: var(--blue-strong);
                }
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
            color: var(--white-active);
            margin-bottom: 5px;
            background-color: var(--blue-strong);
            height: 30px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            padding: 0 10px;
            cursor: pointer;
            border: none;
        }



    `,

    BoxAreaRight: styled.div`
        width: 150px;
    `,

    ButtonAddContact: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        border: none;
        height: 80px;
        border-radius: 10px;
        margin-top: -10px;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 700;
        background-color: var(--blue-strong);
        color: var(--white-active);
        cursor: pointer;
        transition: all ease 0.3s;

        :hover {
            background-color: var(--blue-active);
        }

    `,

    BoxInfoContacts: styled.div`
        background-color: var(--blue-relative);
        width: 100%;
        height: auto;
        padding: 20px;
        margin-top: 20px;
        margin-bottom: 10px;
    `,

    TextInfoContacts: styled.p`
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        text-align: center;
        color: var(--white-active);
    `,

    BoxContacts: styled.div`
        display: flex;
        background-color: var(--white-active);
        width: 100%;
        height: auto;
        padding: 10px 20px;
        margin-bottom: 10px;
        box-shadow: 3px 3px 5px #888888;
    `,

    BoxContactName: styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;

    `,

    TextStrong: styled.p`
        font-family: 'Roboto', sans-serif;
        color: var(--blue-strong);
        font-size: 18px;
        font-weight: 700;
    `,

    TextName: styled.h2`
        font-family: 'Roboto', sans-serif;
        color: var(--blue-strong);
        font-size: 26px;
        font-weight: 700;
    `,
    TextNameComplete: styled.p`
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: var(--blue-active);
    `,
    TextAddress: styled.p`
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: var(--blue-active);
    `,
    TextPhone: styled.p`
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: var(--blue-active);
    `,
    TextBirth: styled.p`
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: var(--blue-active);
    `,

    TextEmail: styled.p`
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: var(--blue-active);
    `,

    BoxContactButtons: styled.div`
        display: flex;
        height: auto;
        width: 250px;
        align-items: flex-end;
    `,

    Buttons: styled.button`
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        height: 50px;
        margin-right: 10px;
        font-size: 16px;
        color: var(--white-active);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all ease 0.3s;
        background-color: ${props => props.color === 'edit' ? 'var(--blue-active)' : 'var(--red-strong)'};

        :hover {
            background-color: ${props => props.color === 'edit' ? 'var(--blue-relative)' : 'var(--red-relative)'};
        } 
    `,

    BoxAreaForm: styled.div`
        display: flex;
        flex-direction: row;

        .areaLabel {
            display: flex;
            flex-direction: column;
            padding: 10px;
            max-width: 500px;
        }

        .area-title {
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            font-size: 15px;
            color: var(--blue-strong);
            margin-bottom: 2px;
        }

        .area-input {
            flex: 1;

            input {
            width: 450px;
            font-size: 14px;
            padding: 5px;
            border: 1px solid var(--blue-gray);
            border-radius: 3px;
            outline: 0;
            transition: all ease 0.4s;

                &:focus {
                    border: 1px solid var(--blue-relative);
                    color: #333;
                }
            }
        }

        .box-buttons {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            height: 40px;
            margin-top: 15px;
            padding-right: 10px;
            justify-content: space-between;

            button {               
                width: 120px;
                margin-left: 10px;
                color: var(--white-active);
                border: none;
                cursor: pointer;
                border-radius: 5px;
               
            }

            .close-button {
                background-color: var(--red-strong);

                :hover {
                    background-color: var(--red-relative); 
                }
            }

            .send-contacts {
                background-color: var(--blue-strong);

                :hover {
                    background-color: var(--blue-active);
                }
            }

            .button-update {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 120px;
                margin-left: 10px;
                color: var(--white-active);
                border: none;
                cursor: pointer;
                border-radius: 5px;
                background-color: var(--blue-strong);

                :hover {
                    background-color: var(--blue-active);
                }

                p {
                    font-family: 'Roboto', sans-serif;
                    font-size: 12px;
                }
            }

            
        }

    `,


}