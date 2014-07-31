(ns pagentry.animation
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [goog.debug :as debug]
            [goog.fx.easing :as ease]
            [pagentry.bardo :as bardo]
            
            [cljs.core.async :as async :refer [chan buffer sliding-buffer close! put! pipe unique merge map< filter< alts! timeout  <!]]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]
            [om.dom :as kom :include-macros true]
            [om.core :as om :include-macros true]))

;; time polarity (0 -> 1) -> ease -> component state ;


(defn tween-state [owner bardo key]
  (go-loop []
           (when-let [val (<! bardo)]
             (om/set-state! owner key val)
             (recur))))

(defn delta [on-key prevstate currstate [a b] length trans owner state-key]
  (when-not (= (on-key prevstate) (on-key currstate))
    (if (on-key currstate)
      (tween-state owner (bardo/transition a b length trans) state-key)
     (tween-state owner (bardo/transition b a length trans) state-key)
      )))


