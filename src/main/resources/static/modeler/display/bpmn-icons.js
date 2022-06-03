/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _drawUserTaskIcon(paper, startX, startY) {
    var path1 = paper.path("m 1,17 16,0 0,-1.7778 -5.333332,-3.5555 0,-1.7778 c 1.244444,0 1.244444,-2.3111 1.244444,-2.3111 l 0,-3.0222 C 12.555557,0.8221 9.0000001,1.0001 9.0000001,1.0001 c 0,0 -3.5555556,-0.178 -3.9111111,3.5555 l 0,3.0222 c 0,0 0,2.3111 1.2444443,2.3111 l 0,1.7778 L 1,15.2222 1,17 17,17");
    path1.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#d1b575"
    });

    var userTaskIcon = paper.set();
    userTaskIcon.push(path1);

    userTaskIcon.transform("T" + startX + "," + startY);
}

function _drawServiceTaskIcon(paper, startX, startY) {
    var path1 = paper.path("M 8,1 7.5,2.875 c 0,0 -0.02438,0.250763 -0.40625,0.4375 C 7.05724,3.330353 7.04387,3.358818 7,3.375 6.6676654,3.4929791 6.3336971,3.6092802 6.03125,3.78125 6.02349,3.78566 6.007733,3.77681 6,3.78125 5.8811373,3.761018 5.8125,3.71875 5.8125,3.71875 l -1.6875,-1 -1.40625,1.4375 0.96875,1.65625 c 0,0 0.065705,0.068637 0.09375,0.1875 0.002,0.00849 -0.00169,0.022138 0,0.03125 C 3.6092802,6.3336971 3.4929791,6.6676654 3.375,7 3.3629836,7.0338489 3.3239228,7.0596246 3.3125,7.09375 3.125763,7.4756184 2.875,7.5 2.875,7.5 L 1,8 l 0,2 1.875,0.5 c 0,0 0.250763,0.02438 0.4375,0.40625 0.017853,0.03651 0.046318,0.04988 0.0625,0.09375 0.1129372,0.318132 0.2124732,0.646641 0.375,0.9375 -0.00302,0.215512 -0.09375,0.34375 -0.09375,0.34375 L 2.6875,13.9375 4.09375,15.34375 5.78125,14.375 c 0,0 0.1229911,-0.09744 0.34375,-0.09375 0.2720511,0.147787 0.5795915,0.23888 0.875,0.34375 0.033849,0.01202 0.059625,0.05108 0.09375,0.0625 C 7.4756199,14.874237 7.5,15.125 7.5,15.125 L 8,17 l 2,0 0.5,-1.875 c 0,0 0.02438,-0.250763 0.40625,-0.4375 0.03651,-0.01785 0.04988,-0.04632 0.09375,-0.0625 0.332335,-0.117979 0.666303,-0.23428 0.96875,-0.40625 0.177303,0.0173 0.28125,0.09375 0.28125,0.09375 l 1.65625,0.96875 1.40625,-1.40625 -0.96875,-1.65625 c 0,0 -0.07645,-0.103947 -0.09375,-0.28125 0.162527,-0.290859 0.262063,-0.619368 0.375,-0.9375 0.01618,-0.04387 0.04465,-0.05724 0.0625,-0.09375 C 14.874237,10.52438 15.125,10.5 15.125,10.5 L 17,10 17,8 15.125,7.5 c 0,0 -0.250763,-0.024382 -0.4375,-0.40625 C 14.669647,7.0572406 14.641181,7.0438697 14.625,7 14.55912,6.8144282 14.520616,6.6141566 14.4375,6.4375 c -0.224363,-0.4866 0,-0.71875 0,-0.71875 L 15.40625,4.0625 14,2.625 l -1.65625,1 c 0,0 -0.253337,0.1695664 -0.71875,-0.03125 l -0.03125,0 C 11.405359,3.5035185 11.198648,3.4455201 11,3.375 10.95613,3.3588185 10.942759,3.3303534 10.90625,3.3125 10.524382,3.125763 10.5,2.875 10.5,2.875 L 10,1 8,1 z m 1,5 c 1.656854,0 3,1.3431458 3,3 0,1.656854 -1.343146,3 -3,3 C 7.3431458,12 6,10.656854 6,9 6,7.3431458 7.3431458,6 9,6 z");
    path1.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#72a7d0"
    });

    var serviceTaskIcon = paper.set();
    serviceTaskIcon.push(path1);

    serviceTaskIcon.transform("T" + startX + "," + startY);
}

function _drawScriptTaskIcon(paper, startX, startY) {
    var path1 = paper.path("m 5,2 0,0.094 c 0.23706,0.064 0.53189,0.1645 0.8125,0.375 0.5582,0.4186 1.05109,1.228 1.15625,2.5312 l 8.03125,0 1,0 1,0 c 0,-3 -2,-3 -2,-3 l -10,0 z M 4,3 4,13 2,13 c 0,3 2,3 2,3 l 9,0 c 0,0 2,0 2,-3 L 15,6 6,6 6,5.5 C 6,4.1111 5.5595,3.529 5.1875,3.25 4.8155,2.971 4.5,3 4.5,3 L 4,3 z");
    path1.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#72a7d0"
    });

    var scriptTaskIcon = paper.set();
    scriptTaskIcon.push(path1);

    scriptTaskIcon.transform("T" + startX + "," + startY);
}

function _drawBusinessRuleTaskIcon(paper, startX, startY) {
    var path1 = paper.path("m 1,2 0,14 16,0 0,-14 z m 1.45458,5.6000386 2.90906,0 0,2.7999224 -2.90906,0 z m 4.36364,0 8.72718,0 0,2.7999224 -8.72718,0 z m -4.36364,4.1998844 2.90906,0 0,2.800116 -2.90906,0 z m 4.36364,0 8.72718,0 0,2.800116 -8.72718,0 z");
    path1.attr({
        "stroke": "none",
        "fill": "#72a7d0"
    });

    var businessRuleTaskIcon = paper.set();
    businessRuleTaskIcon.push(path1);

    businessRuleTaskIcon.transform("T" + startX + "," + startY);
}

function _drawSendTaskIcon(paper, startX, startY) {
    var path1 = paper.path("M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z");
    path1.attr({
        "stroke": "none",
        "fill": "#16964d"
    });

    var sendTaskIcon = paper.set();
    sendTaskIcon.push(path1);

    sendTaskIcon.transform("T" + startX + "," + startY);
}

function _drawManualTaskIcon(paper, startX, startY) {
    var path1 = paper.path("m 17,9.3290326 c -0.0069,0.5512461 -0.455166,1.0455894 -0.940778,1.0376604 l -5.792746,0 c 0.0053,0.119381 0.0026,0.237107 0.0061,0.355965 l 5.154918,0 c 0.482032,-0.0096 0.925529,0.49051 0.919525,1.037574 -0.0078,0.537128 -0.446283,1.017531 -0.919521,1.007683 l -5.245273,0 c -0.01507,0.104484 -0.03389,0.204081 -0.05316,0.301591 l 2.630175,0 c 0.454137,-0.0096 0.872112,0.461754 0.866386,0.977186 C 13.619526,14.554106 13.206293,15.009498 12.75924,15 L 3.7753054,15 C 3.6045812,15 3.433552,14.94423 3.2916363,14.837136 c -0.00174,0 -0.00436,0 -0.00609,0 C 1.7212035,14.367801 0.99998255,11.458641 1,11.458641 L 1,7.4588393 c 0,0 0.6623144,-1.316333 1.8390583,-2.0872584 1.1767614,-0.7711868 6.8053358,-2.40497 7.2587847,-2.8052901 0.453484,-0.40032 1.660213,1.4859942 0.04775,2.4010487 C 8.5332315,5.882394 8.507351,5.7996113 8.4370292,5.7936859 l 6.3569748,-0.00871 c 0.497046,-0.00958 0.952273,0.5097676 0.94612,1.0738232 -0.0053,0.556126 -0.456176,1.0566566 -0.94612,1.0496854 l -4.72435,0 c 0.01307,0.1149374 0.0244,0.2281319 0.03721,0.3498661 l 5.952195,0 c 0.494517,-0.00871 0.947906,0.5066305 0.940795,1.0679848 z");
    path1.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#d1b575"
    });

    var manualTaskIcon = paper.set();
    manualTaskIcon.push(path1);

    manualTaskIcon.transform("T" + startX + "," + startY);
}

function _drawReceiveTaskIcon(paper, startX, startY) {
    var path = paper.path("m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z");
    path.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#16964d"
    });

    startX += 4;
    startY += 2;

    path.transform("T" + startX + "," + startY);

}

function _drawCamelTaskIcon(paper, startX, startY) {
    var path = paper.path("m 8.1878027,15.383782 c -0.824818,-0.3427 0.375093,-1.1925 0.404055,-1.7743 0.230509,-0.8159 -0.217173,-1.5329 -0.550642,-2.2283 -0.106244,-0.5273 -0.03299,-1.8886005 -0.747194,-1.7818005 -0.712355,0.3776 -0.9225,1.2309005 -1.253911,1.9055005 -0.175574,1.0874 -0.630353,2.114 -0.775834,3.2123 -0.244009,0.4224 -1.741203,0.3888 -1.554386,-0.1397 0.651324,-0.3302 1.13227,-0.9222 1.180246,-1.6705 0.0082,-0.7042 -0.133578,-1.3681 0.302178,-2.0083 0.08617,-0.3202 0.356348,-1.0224005 -0.218996,-0.8051 -0.694517,0.2372 -1.651062,0.6128 -2.057645,-0.2959005 -0.696769,0.3057005 -1.102947,-0.611 -1.393127,-1.0565 -0.231079,-0.6218 -0.437041,-1.3041 -0.202103,-1.9476 -0.185217,-0.7514 -0.39751099,-1.5209 -0.35214999,-2.301 -0.243425,-0.7796 0.86000899,-1.2456 0.08581,-1.8855 -0.76078999,0.1964 -1.41630099,-0.7569 -0.79351899,-1.2877 0.58743,-0.52829998 1.49031699,-0.242 2.09856399,-0.77049998 0.816875,-0.3212 1.256619,0.65019998 1.923119,0.71939998 0.01194,0.7333 -0.0031,1.5042 -0.18417,2.2232 -0.194069,0.564 -0.811196,1.6968 0.06669,1.9398 0.738382,-0.173 1.095723,-0.9364 1.659041,-1.3729 0.727298,-0.3962 1.093982,-1.117 1.344137,-1.8675 0.400558,-0.8287 1.697676,-0.6854 1.955367,0.1758 0.103564,0.5511 0.9073983,1.7538 1.2472763,0.6846 0.121868,-0.6687 0.785541,-1.4454 1.518183,-1.0431 0.813587,0.4875 0.658233,1.6033 1.285504,2.2454 0.768715,0.8117 1.745394,1.4801 2.196633,2.5469 0.313781,0.8074 0.568552,1.707 0.496624,2.5733 -0.35485,0.8576005 -1.224508,-0.216 -0.64725,-0.7284 0.01868,-0.3794 -0.01834,-1.3264 -0.370249,-1.3272 -0.123187,0.7586 -0.152778,1.547 -0.10869,2.3154 0.270285,0.6662005 1.310741,0.7653005 1.060553,1.6763005 -0.03493,0.9801 0.294343,1.9505 0.148048,2.9272 -0.320479,0.2406 -0.79575,0.097 -1.185062,0.1512 -0.165725,0.3657 -0.40138,0.921 -1.020848,0.6744 -0.564671,0.1141 -1.246404,-0.266 -0.578559,-0.7715 0.679736,-0.5602 0.898618,-1.5362 0.687058,-2.3673 -0.529674,-1.108 -1.275984,-2.0954005 -1.839206,-3.1831005 -0.634619,-0.1004 -1.251945,0.6779 -1.956789,0.7408 -0.6065893,-0.038 -1.0354363,-0.06 -0.8495673,0.6969005 0.01681,0.711 0.152396,1.3997 0.157345,2.1104 0.07947,0.7464 0.171287,1.4944 0.238271,2.2351 0.237411,1.0076 -0.687542,1.1488 -1.414811,0.8598 z m 6.8675483,-1.8379 c 0.114364,-0.3658 0.206751,-1.2704 -0.114466,-1.3553 -0.152626,0.5835 -0.225018,1.1888 -0.227537,1.7919 0.147087,-0.1166 0.265559,-0.2643 0.342003,-0.4366 z");
    path.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#bd4848"
    });

    startX += 4;
    startY += 2;

    path.transform("T" + startX + "," + startY);

}

function _drawMuleTaskIcon(paper, startX, startY) {
    var path = paper.path("M 8,0 C 3.581722,0 0,3.5817 0,8 c 0,4.4183 3.581722,8 8,8 4.418278,0 8,-3.5817 8,-8 L 16,7.6562 C 15.813571,3.3775 12.282847,0 8,0 z M 5.1875,2.7812 8,7.3437 10.8125,2.7812 c 1.323522,0.4299 2.329453,1.5645 2.8125,2.8438 1.136151,2.8609 -0.380702,6.4569 -3.25,7.5937 -0.217837,-0.6102 -0.438416,-1.2022 -0.65625,-1.8125 0.701032,-0.2274 1.313373,-0.6949 1.71875,-1.3125 0.73624,-1.2317 0.939877,-2.6305 -0.03125,-4.3125 l -2.75,4.0625 -0.65625,0 -0.65625,0 -2.75,-4 C 3.5268433,7.6916 3.82626,8.862 4.5625,10.0937 4.967877,10.7113 5.580218,11.1788 6.28125,11.4062 6.063416,12.0165 5.842837,12.6085 5.625,13.2187 2.755702,12.0819 1.238849,8.4858 2.375,5.625 2.858047,4.3457 3.863978,3.2112 5.1875,2.7812 z");
    path.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#bd4848"
    });

    startX += 4;
    startY += 2;

    path.transform("T" + startX + "," + startY);

}

function _drawAlfrescoPublishTaskIcon(paper, startX, startY) {

    startX += 2;
    startY += 2;

    var path = paper.path("M4.11870968,2.12890323 L6.12954839,0.117935484 L3.10993548,0.118064516 L3.10270968,0.118064516 C1.42941935,0.118064516 0.0729032258,1.47458065 0.0729032258,3.14774194 C0.0729032258,4.82116129 1.42929032,6.17754839 3.10258065,6.17754839 C3.22967742,6.17754839 3.35470968,6.16877419 3.47767742,6.15354839 C2.8163871,4.85083871 3.02954839,3.21793548 4.11870968,2.12890323M6.57032258,3.144 L6.57032258,0.300258065 L4.43522581,2.4356129 L4.43006452,2.44064516 C3.24683871,3.62387097 3.24683871,5.54219355 4.43006452,6.72541935 C5.61329032,7.90864516 7.5316129,7.90864516 8.71483871,6.72541935 C8.80464516,6.6356129 8.88529032,6.54025806 8.96154839,6.44270968 C7.57341935,5.98864516 6.57045161,4.68387097 6.57032258,3.144");
    path.attr({"fill": "#87C040"});

    var startX1 = startX + 1.419355;
    var startY1 = startY + 8.387097;
    path.transform("T" + startX1 + "," + startY1);

    path = paper.path("M10.4411613,10.5153548 L8.43032258,8.50451613 L8.43032258,11.5313548 C8.43032258,13.2047742 9.78683871,14.5611613 11.460129,14.5611613 C13.1334194,14.5611613 14.4899355,13.2047742 14.4899355,11.5314839 C14.4899355,11.4043871 14.4811613,11.2793548 14.4659355,11.1563871 C13.1632258,11.8178065 11.5303226,11.6045161 10.4411613,10.5153548M15.0376774,5.91935484 C14.947871,5.82954839 14.8526452,5.74890323 14.7550968,5.67264516 C14.3010323,7.06064516 12.996129,8.06374194 11.4563871,8.06374194 L8.61277419,8.06374194 L10.7529032,10.204 C11.936129,11.3872258 13.8545806,11.3872258 15.0376774,10.204 C16.2209032,9.02077419 16.2209032,7.10245161 15.0376774,5.91935484");
    path.attr({"fill": "#87C040"});
    path.transform("T" + startX + "," + startY);

    path = paper.path("M5.9083871,1.5636129 C5.78129032,1.5636129 5.65625806,1.57225806 5.53329032,1.58748387 C6.19458065,2.89032258 5.98141935,4.52309677 4.89225806,5.61225806 L2.88154839,7.62309677 L5.9083871,7.62309677 C7.58154839,7.62309677 8.93806452,6.26658065 8.93806452,4.59329032 C8.93819355,2.92 7.58167742,1.5636129 5.9083871,1.5636129");
    path.attr({"fill": "#ED9A2D"});
    var startX2 = startX + 5.548387;
    path.transform("T" + startX2 + "," + startY);
    path = paper.path("M4.58090323,1.0156129 C3.39767742,-0.167483871 1.47935484,-0.167483871 0.296129032,1.01574194 C0.206451613,1.10554839 0.125806452,1.20077419 0.0495483871,1.29845161 C1.43754839,1.75251613 2.44064516,3.05729032 2.44064516,4.59703226 L2.44064516,7.44077419 L4.57574194,5.30554839 L4.58090323,5.30051613 C5.76412903,4.11729032 5.76412903,2.19896774 4.58090323,1.0156129");
    path.attr({"fill": "#5698C6"});
    path.transform("T" + startX2 + "," + startY);

    path = paper.path("M5.54051613,5.61432258 L5.62670968,5.70425806 L7.54632258,7.62387097 L7.5483871,7.62387097 L7.5483871,4.604 L7.5483871,4.59677419 C7.5483871,2.92348387 6.19187097,1.56696774 4.51858065,1.56696774 C2.84529032,1.56696774 1.48877419,2.92335484 1.48890323,4.59664516 C1.48890323,4.72348387 1.49754839,4.84812903 1.51264516,4.97083871 C2.81625806,4.30993548 4.45122581,4.52503226 5.54051613,5.61432258M1.23251613,10.4292903 C1.25625806,10.3588387 1.28180645,10.2894194 1.30980645,10.2210323 C1.31329032,10.2123871 1.3163871,10.2036129 1.32,10.1952258 C1.35070968,10.1216774 1.38451613,10.0500645 1.42,9.97935484 C1.42774194,9.96374194 1.43574194,9.9483871 1.44387097,9.93277419 C1.4803871,9.86258065 1.51883871,9.79354839 1.55987097,9.72632258 C1.56425806,9.71909677 1.56903226,9.71225806 1.57341935,9.70529032 C1.6123871,9.64245161 1.65354839,9.58141935 1.6963871,9.52141935 C1.70516129,9.50903226 1.71380645,9.49651613 1.72283871,9.48425806 C1.76890323,9.42154839 1.81690323,9.36064516 1.86683871,9.30129032 C1.87703226,9.28916129 1.88735484,9.27741935 1.89780645,9.26567742 C1.94658065,9.20916129 1.99690323,9.15406452 2.04916129,9.10090323 C2.05380645,9.09625806 2.05806452,9.09135484 2.06270968,9.08670968 C2.11832258,9.03083871 2.17625806,8.97741935 2.23548387,8.92554839 C2.2483871,8.91419355 2.26129032,8.90296774 2.27432258,8.89187097 C2.33393548,8.84103226 2.39496774,8.79212903 2.45780645,8.74529032 C2.46606452,8.73922581 2.47470968,8.73354839 2.48296774,8.7276129 C2.54167742,8.68490323 2.60180645,8.64412903 2.66322581,8.60503226 C2.67535484,8.59729032 2.68735484,8.58929032 2.6996129,8.58167742 C2.76593548,8.54064516 2.83380645,8.50206452 2.90296774,8.46541935 C2.91754839,8.45780645 2.93225806,8.45045161 2.94696774,8.44296774 C3.016,8.40774194 3.08593548,8.37406452 3.15741935,8.34348387 C3.16090323,8.34206452 3.16425806,8.3403871 3.16774194,8.33883871 C3.24167742,8.30748387 3.31729032,8.27948387 3.39380645,8.25316129 C3.41032258,8.24748387 3.42670968,8.24180645 3.44335484,8.2363871 C3.51909677,8.21174194 3.59587097,8.18903226 3.67380645,8.16929032 C3.68567742,8.16645161 3.69793548,8.16387097 3.70980645,8.16116129 C3.78206452,8.14374194 3.85509677,8.12877419 3.92890323,8.116 C3.94270968,8.11367742 3.9563871,8.11083871 3.97019355,8.10877419 C4.05032258,8.09587097 4.13148387,8.08619355 4.21329032,8.07896774 C4.23096774,8.07741935 4.24877419,8.07625806 4.26645161,8.07483871 C4.35109677,8.06877419 4.43612903,8.06451613 4.52232258,8.06451613 L7.36606452,8.0643871 L5.22580645,5.92412903 C4.04258065,4.74103226 2.12412903,4.74090323 0.941032258,5.92412903 C-0.242193548,7.10735484 -0.242193548,9.02567742 0.941032258,10.2089032 C1.03070968,10.2985806 1.12464516,10.3814194 1.22206452,10.4575484 C1.22529032,10.448 1.22929032,10.4388387 1.23251613,10.4292903");
    path.attr({"fill": "#5698C6"});
    path.transform("T" + startX + "," + startY);

    path = paper.path("M5.23290323,5.92412903 L6.92748387,7.61870968 L4.64980645,7.61870968 L4.52064516,7.62141935 C3.13354839,7.62141935 1.96425806,6.68929032 1.60477419,5.41729032 C2.75870968,4.77019355 4.24619355,4.93754839 5.22787097,5.91909677 L5.23290323,5.92412903M7.54722581,4.59612903 L7.54722581,6.99264516 L5.93664516,5.38206452 L5.84348387,5.29264516 C4.86258065,4.31187097 4.69483871,2.82580645 5.34012903,1.67225806 C6.61367742,2.03070968 7.54722581,3.20090323 7.54722581,4.58890323 L7.54722581,4.59612903M10.1385806,5.29819355 L8.444,6.99290323 L8.444,4.71522581 L8.44129032,4.58606452 C8.44129032,3.19896774 9.37341935,2.02954839 10.6454194,1.67019355 C11.2925161,2.82412903 11.1251613,4.3116129 10.1436129,5.29316129 L10.1385806,5.29819355");
    path.attr({"fill": "#446BA5"});
    path.transform("T" + startX + "," + startY);

    path = paper.path("M11.4548387,7.61677419 L9.05832258,7.61677419 L10.6689032,6.00619355 L10.7583226,5.91303226 C11.7390968,4.93212903 13.2251613,4.7643871 14.3787097,5.40967742 C14.0202581,6.68322581 12.8500645,7.61677419 11.4620645,7.61677419 L11.4548387,7.61677419");
    path.attr({"fill": "#FFF101"});
    path.transform("T" + startX + "," + startY);

    path = paper.path("M10.7470968,10.192 L9.05251613,8.49741935 L11.3301935,8.49741935 L11.4593548,8.49470968 C12.8464516,8.49483871 14.0157419,9.42696774 14.3752258,10.6989677 C13.2211613,11.3459355 11.7338065,11.1787097 10.752129,10.1970323 L10.7470968,10.192M8.43729032,11.5174194 L8.43729032,9.12090323 L10.047871,10.7314839 L10.1411613,10.8209032 C11.1219355,11.8018065 11.2896774,13.2876129 10.6443871,14.4412903 C9.37083871,14.0828387 8.43729032,12.9127742 8.43729032,11.5245161 L8.43729032,11.5174194M5.86193548,10.8296774 L7.55651613,9.13496774 L7.55651613,11.4126452 L7.55922581,11.5418065 C7.55922581,12.9289032 6.62709677,14.0983226 5.35509677,14.4578065 C4.708,13.3036129 4.87535484,11.8162581 5.85690323,10.8347097 L5.86193548,10.8296774M4.53251613,8.50993548 L6.92903226,8.50993548 L5.31845161,10.1205161 L5.22903226,10.2136774 C4.24812903,11.1945806 2.76219355,11.3623226 1.60851613,10.7170323 C1.96709677,9.44335484 3.13716129,8.50993548 4.52529032,8.50993548 L4.53251613,8.50993548");
    path.attr({"fill": "#45AB47"});
    path.transform("T" + startX + "," + startY);
}

function _drawHttpTaskIcon(paper, startX, startY) {
    var path = paper.path("m 16.704699,5.9229055 q 0.358098,0 0.608767,0.2506681 0.250669,0.250668 0.250669,0.6087677 0,0.3580997 -0.250669,0.6087677 -0.250669,0.2506679 -0.608767,0.2506679 -0.358098,0 -0.608767,-0.2506679 -0.250669,-0.250668 -0.250669,-0.6087677 0,-0.3580997 0.250669,-0.6087677 0.250669,-0.2506681 0.608767,-0.2506681 z m 2.578308,-2.0053502 q -2.229162,0 -3.854034,0.6759125 -1.624871,0.6759067 -3.227361,2.2694472 -0.716197,0.725146 -1.575633,1.7457293 L 7.2329969,8.7876913 Q 7.0897576,8.8055849 7.000233,8.9309334 L 4.9948821,12.368677 q -0.035811,0.06267 -0.035811,0.143242 0,0.107426 0.080572,0.205905 l 0.5729577,0.572957 q 0.125334,0.116384 0.2864786,0.07162 l 2.4708789,-0.760963 2.5156417,2.515645 -0.76096,2.470876 q -0.009,0.02687 -0.009,0.08057 0,0.125338 0.08058,0.205905 l 0.572957,0.572958 q 0.170096,0.152194 0.349146,0.04476 l 3.437744,-2.005351 q 0.125335,-0.08953 0.143239,-0.232763 l 0.17905,-3.392986 q 1.02058,-0.859435 1.745729,-1.575629 1.67411,-1.6830612 2.309735,-3.2049805 0.635625,-1.5219191 0.635625,-3.8585111 0,-0.1253369 -0.08505,-0.2148575 -0.08505,-0.089526 -0.201431,-0.089526 z");
    path.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#16964d"
    });

    startX += -2;
    startY += -2;

    path.transform("T" + startX + "," + startY);

}

function _drawShellTaskIcon(paper, startX, startY) {
    var path = paper.path("m 1,2 0,14 16,0 0,-14 z m 1.4,3 12.7,0 0,10 -12.7,0 z");
    path.attr({
        "opacity": 1,
        "stroke": "none",
        "fill": "#16964d"
    });
    var text = paper.text(3, 9, ">_").attr({
        "font-size": "5px",
        "fill": "#16964d"
    });

    startY += -2;
    text.transform("T" + startX + "," + startY);
    startX += -2;
    path.transform("T" + startX + "," + startY);
}

function _drawDecisionTaskIcon(paper, startX, startY) {
    var path1 = paper.path("m 1,2 0,14 16,0 0,-14 z m 1.9,2.4000386 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m -8.67364,3.9 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m -8.67364,3.9 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z");
    path1.attr({
        "opacity": 1,
        "stroke": "#000000",
        "fill": "#F4F6F7"
    });

    var decisionTaskIcon = paper.set();
    decisionTaskIcon.push(path1);

    decisionTaskIcon.translate(startX, startY);
    decisionTaskIcon.scale(0.7, 0.7);
}

function _drawEventIcon(paper, element) {
    if (element.eventDefinition && element.eventDefinition.type) {
        if ("timer" === element.eventDefinition.type) {
            _drawTimerIcon(paper, element);

        } else if ("conditional" === element.eventDefinition.type) {
            _drawConditionalIcon(paper, element);

        } else if ("error" === element.eventDefinition.type) {
            _drawErrorIcon(paper, element);

        } else if ("escalation" === element.eventDefinition.type) {
            _drawEscalationIcon(paper, element);

        } else if ("signal" === element.eventDefinition.type) {
            _drawSignalIcon(paper, element);

        } else if ("message" === element.eventDefinition.type) {
            _drawMessageIcon(paper, element);

        } else if ("eventRegistry" === element.eventDefinition.type) {
            _drawMessageIcon(paper, element);

        } else if ("variable" === element.eventDefinition.type) {
            _drawVariableListenerIcon(paper, element);
        }
    }
}

function _drawConditionalIcon(paper, element) {
    var fill = "none";

    var path = paper.path("M 10 10 L 22 10 M 10 14 L 22 14 M 10 18 L 22 18 M 10 22 L 22 22");
    path.attr({
        "stroke": "black",
        "stroke-width": 1,
        "fill": fill
    });
    path.transform("T" + (element.x - 1) + "," + (element.y - 1));
    return path;
}

function _drawVariableListenerIcon(paper, element) {
    var fill = "none";

    var path = paper.path("M 20.834856,22.874369 L 10.762008,22.873529 L 7.650126,13.293421 L 15.799725,7.3734296 L 23.948336,13.294781 L 20.834856,22.874369 z");
    path.attr({
        "stroke": "black",
        "stroke-width": 1,
        "fill": fill
    });
    path.transform("T" + (element.x - 1) + "," + (element.y - 1));
    return path;
}

function _drawTimerIcon(paper, element) {
    var x = element.x + (element.width / 2);
    var y = element.y + (element.height / 2);

    var circle = paper.circle(x, y, 10);

    circle.attr({
        "stroke-width": 1,
        "stroke": "black",
        "fill": "none"
    });

    var path = paper.path("M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20 10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5 L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217 15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125 10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007 8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5 L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z");
    path.attr({
        "stroke": "none",
        "fill": "#585858"
    });
    path.transform("T" + (element.x + 5) + "," + (element.y + 5));
    return path;
}

function _drawErrorIcon(paper, element) {
    var path = paper.path("M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607 L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z");

    var fill = "none";
    var x = element.x - 1;
    var y = element.y - 1;
    if (element.type === "EndEvent") {
        fill = "black";
        x -= 1;
        y -= 1;
    }

    path.attr({
        "stroke": "black",
        "stroke-width": 1,
        "fill": fill
    });

    path.transform("T" + x + "," + y);
    return path;
}

function _drawEscalationIcon(paper, element) {
    var fill = "none";
    if (element.type === "ThrowEvent") {
        fill = "black";
    }

    var path = paper.path("M 16,8.75 L22,23.75 L16,17 L10,23.75z");
    path.attr({
        "stroke": "black",
        "stroke-width": 1,
        "fill": fill
    });
    path.transform("T" + (element.x - 1) + "," + (element.y - 1));
    return path;
}

function _drawSignalIcon(paper, element) {
    var fill = "none";
    if (element.type === "ThrowEvent") {
        fill = "black";
    }

    var path = paper.path("M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z");
    path.attr({
        "stroke": "black",
        "stroke-width": 1,
        "fill": fill
    });
    path.transform("T" + (element.x - 1) + "," + (element.y - 1));
    return path;
}

function _drawMessageIcon(paper, element) {
    var fill = "none";
    if (element.type === "ThrowEvent") {
        fill = "black";
    }

    var path = paper.path("M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z");
    path.attr({
        "stroke": "black",
        "stroke-width": 1,
        "fill": fill
    });
    path.transform("T" + (element.x + 6) + "," + (element.y + 6));
    return path;
}
