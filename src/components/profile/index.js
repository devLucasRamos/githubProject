import React from 'react'
import * as S from './styled'
const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImg src="https://avatars.githubusercontent.com/u/87498874?v=4"
            alt="User Pic"/>
            
            
            <S.Wrapper>
                <S.WrapperInfoUsers>
                    <div>
                        <h1>Lucas Ramos</h1>
                        <S.WrapperUsername>
                            <h3>Username: </h3>
                            <a href="http://api.github.com/users/devlucasramos"
                            target="_blank"
                            rel="noreferrer">devlucasramos</a>
                        </S.WrapperUsername>
                    </div>
                        <S.WrapperStatusCount>
        
                        <div>
                            <h4>Followers</h4>
                            <span>9999+</span>
                        </div>

                        <div>
                            <h4>Starred</h4>
                            <span>347</span>
                        </div>

                        <div>
                            <h4>Followings</h4>
                            <span>29</span>
                        </div>
                        </S.WrapperStatusCount>
                </S.WrapperInfoUsers>
            </S.Wrapper>
        </S.Wrapper>
    );
}


            export default Profile;
