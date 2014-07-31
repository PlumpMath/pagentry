(ns pagentry.main
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [figwheel.client :as fw :include-macros true]
            [pagentry.animation :as ani]
            [goog.debug :as debug]
            [cljs.core.async :as async :refer [chan put! pipe unique merge map< filter< alts! <!]]
            [om.core :as om :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            ;[om.dom :as dom :include-macros true]
            ))
(enable-console-print!)

(js/React.initializeTouchEvents true)

(defonce app-state (atom {}))

(defn prefixer [prefixes thing]
  (for [prefix prefixes]
    (keyword (str prefix "-" thing))
    ))

(print (prefixer ["-moz" "-webkit"] "transform"))

(defcomponent blanket [data owner]
  (did-update [_ _ prevstate]
              (let [currstate (om/get-state owner)
                    idx       (:index currstate)
                    ]
                
                (ani/delta :toggle prevstate currstate [0 (- 85 (* idx 15))] 370 :cubic-in-out owner :x-pos)
                ))
  (render-state [_ {:keys [toggle x-pos color index]}]
                (dom/section {:class "full flex"
                              :style {:position "absolute"
                                      :top 0
                                      :left 0
                                      :transform (str "translateX(-" x-pos  "%)" )
                                      :background (str "#"color)}}
                             (dom/article {:style {:font-size "40vw"}} (str index)) ;; you can put views here
                             (dom/div {:on-click #(om/update-state! owner :toggle not)
                                       :on-touch-end #(om/update-state! owner :toggle not)
                                       :class "flex trans"
                                       :style {:position "absolute"
                                               :width "15%"
                                               :height "15%"
                                               :font-size "5vh"
                                               :color (if toggle "white" "#A7F5AB")
                                               :transform (str "translateY(-" x-pos  "%)" )
                                               :background (if toggle  "#A7F5AB" "white")
                                               :bottom 0
                                               :right 0}} (str toggle)))))

(defcomponent app-view [data owner]
  (render-state [_ _]
                
                (let [colors ["ADFFA4" "A7F5AB" "ADFFA4"]
                      cnt (count colors)
                      cnt1 (- cnt 1)
                      width (* 15 cnt)
                      ]
                  (dom/section {:class "full"}
                               (dom/section {:class "flex"
                                             :style {:position "absolute"
                                                     :z-index 1
                                                     :background "#A7F5AB"
                                                     :left (str width "%")
                                                     :width (str (- 100 width) "%")
                                                     :height "100%"
                                                     ;:transform (str "translateX(" width  "%)")
                                                     }} (dom/img {:src "http://www.mbgnet.net/bioplants/images/plant.gif"}))
                               (map-indexed #(om/build blanket {} {:init-state {:color %2
                                                                                :toggle false
                                                                                :index (- cnt1 %) }})

                                            colors) 
                               ))

                             
                ))
(when (= (.-hostname js/location) "localhost")
    (fw/watch-and-reload
     ;; :websocket-url "ws://localhost:3449/figwheel-ws" default
     :jsload-callback (fn [] (print "america"))))


(om/root
 app-view
 app-state
  {:target (.querySelector js/document "#app")})
