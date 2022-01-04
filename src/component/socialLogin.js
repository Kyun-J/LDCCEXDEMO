import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";
import {ContButton} from "./elements";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        padding: 10
    },
    btn: {
        width: "100%",
        marginBottom: 12
    },
}));

const socialLoginItems = [
    {
        "type":"kakao",
        "buttonStr":"카카오 로그인"
    },
    {
        "type":"naver",
        "buttonStr":"네이버 로그인"
    },
    {
        "type":"facebook",
        "buttonStr":"페이스북 로그인"
    },
    {
        "type":"google",
        "buttonStr":"구글 로그인"
    }
]

export default function SocialLogin() {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div className={classes.root}>

            { socialLoginItems.map((socialLoginItem) => {
                return <ContButton
                    color="default"
                    size="large"
                    funName="socialLogin"
                    text={socialLoginItem.buttonStr}
                    args={socialLoginItem.type}
                />
            })}

        </div>
    );
}
